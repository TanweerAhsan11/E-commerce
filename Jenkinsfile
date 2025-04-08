pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/TanweerAhsan11/E-commerce'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Docker image build step will go here...'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Docker push step will go here...'
            }
        }

        stage('Deploy to Kubernetes via Ansible') {
            steps {
                echo 'Ansible and Kubernetes deployment step will go here...'
            }
        }
    }
}
