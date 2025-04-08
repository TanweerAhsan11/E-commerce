pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "tanweerahsan11/ecommerce-app" // Replace with your Docker Hub username/image
        DOCKER_CREDENTIALS_ID = "dockerhub-creds"     // Set this up in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TanweerAhsan11/E-commerce'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes via Ansible') {
            steps {
                sh '''
                    cd ansible
                    ansible-playbook deploy.yml
                '''
            }
        }
    }

    post {
        success {
            echo "Deployment successful! ✅"
        }
        failure {
            echo "Build failed ❌"
        }
    }
}
