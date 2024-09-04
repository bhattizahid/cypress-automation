pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/bhattizahid/cypress-automation'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Cypress') {
            steps {
                bat './node_modules/.bin/cypress install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                bat './node_modules/.bin/cypress run'
            }
        }
    }
}
