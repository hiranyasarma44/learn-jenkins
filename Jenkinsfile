pipeline {
    agent {
        any {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
      environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Run') { 
            steps {
                sh 'npm run dev' 
            }
        }
    }
}