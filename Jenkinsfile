pipeline {
    agent any

    // environment {
    //     DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    // }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                // script {
                //     sh "echo 'DOCKER_USERNAME=${DOCKER_USERNAME}' > .env"
                // }
                sh """
                DOCKER_BUILDKIT=1 docker build -t ghassanaldarwish/wds-lubna .
                """
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'

                sh """
                docker-compose -f docker-compose.traefik.yaml up -d
                """
            }
        }
    }
}
