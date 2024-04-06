pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                checkout scm
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose -p edubox-backend up -d --build'
        }
    }
}
}
