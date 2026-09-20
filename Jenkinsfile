pipeline{
    agent any

    stages{

        stage('Checking Environment'){
            steps{
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install'){
            steps{
                echo 'Installing dependencies'
                bat 'npm install'
            }
        }

        stage('Testing'){
            steps{
                echo 'Testing'
            }
        }

        stage('Build'){
            steps{
                echo 'Building Artifact'
                bat 'npm start'
            }
        }

        stage('Complete'){
            steps{
                bat 'echo Setup Complete'
            }
        }
    }
}