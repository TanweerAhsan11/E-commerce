pipeline {
    agent any

    environment {
        IMAGE_NAME = "tanweerahsan11/ecommerce-site"
        DOCKER_CREDENTIALS_ID = "dockerhub-creds"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/TanweerAhsan11/E-commerce'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${IMAGE_NAME}").push("latest")
                    }
                }
            }
        }

        stage('Deploy to Kubernetes via Ansible') {
            steps {
                echo 'We’ll run the Ansible deployment here in the next step...'
            }
        }
    }
}
