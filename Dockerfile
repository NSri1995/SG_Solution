FROM openjdk:11-slim
RUN apt-get update && apt-get install -y wget && apt-get install -y libssl-dev
WORKDIR /usr/app
VOLUME /tmp
RUN addgroup --system --gid 1001 appuser && \
    adduser --system --uid  1001 --group appuser && \
    mkdir -p /usr/app && \
    chown -R appuser:appuser /usr/app
USER appuser
ADD ./target/athena-currency-conversion-listener-1.0.jar  /usr/app/app.jar
EXPOSE 8080
RUN wget -O dd-java-agent.jar 'https://repo.maven.apache.org/maven2/com/datadoghq/dd-java-agent/0.94.0/dd-java-agent-0.94.0.jar'
ENV GC_LOGS="-XX:+UseG1GC -XX:+UseAdaptiveSizePolicy -XX:+UseStringDeduplication -Xlog:gc=debug:file=/tmp/gc.log:time,uptime,level,tags:filecount=10,filesize=10m"
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS $GC_LOGS -javaagent:dd-java-agent.jar -Ddd.service.name=$deploymentName \
            -Ddd.trace.global.tags=$DD_GLOBAL_TAG -Ddd.trace.enabled=true \
            $ADDITIONAL_DATA_DOG_ARGS \
            -Ddd.logs.injection=true -jar /usr/app/app.jar"]
