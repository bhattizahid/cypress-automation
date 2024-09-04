pipeline {
    agent any

    environment {
        // Set up Node environment variables, if necessary
        NODE_ENV = 'development'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Cypress and other dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run Cypress tests
                    sh './node_modules/.bin/cypress run'
                }
            }
        }
    }

    post {
        always {
            // Archive test results and reports
            archiveArtifacts artifacts: '**/cypress/screenshots/*, **/cypress/videos/*'
            junit 'cypress/results/*.xml' // If using JUnit reporter
        }

        failure {
            // Notify on failure (optional)
            mail to: 'team@example.com',
                 subject: "Cypress Tests Failed",
                 body: "The Cypress tests have failed. Please check the Jenkins job for details."
        }
    }
}
