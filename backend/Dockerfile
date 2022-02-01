FROM openjdk:11

VOLUME /tmp

EXPOSE 8082

ADD ./backend/target/backend.jar backend.jar

ENTRYPOINT ["java", "-jar", "backend.jar"]