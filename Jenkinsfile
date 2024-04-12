pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
    
                sh """
                DOCKER_BUILDKIT=1 docker build -t ghassanaldarwish/wds-ui .
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
                docker-compose up -d
                """
            }
        }
    }
}
