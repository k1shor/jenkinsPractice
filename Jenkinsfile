pipeline{
    agent any

    stages{

        stage('Checkout'){
            steps{
                echo 'Checking for files...'
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
                bat 'npm test'
            }
        }

        stage('Build'){
            steps{
                echo 'Building Artifact'
                bat 'npm run build'
            }
        }
    }
}