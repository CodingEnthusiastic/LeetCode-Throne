pipeline {
    agent any

    stages {
        

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run App') {
            steps {
                sh 'npm run preview -- --host 0.0.0.0 --port 3000 &'
            }
        }
    }
}
