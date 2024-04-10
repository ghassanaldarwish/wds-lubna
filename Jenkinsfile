pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    sh "echo 'DOCKER_USERNAME=${DOCKER_USERNAME}' > .env"
                }
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
                // Execute the ansible playbook
                sh """
                ansible-playbook -i /usr/inventory --key-file /usr/.ssh/id_ed25519 ansible.yaml
                """
            }
        }
    }
}
