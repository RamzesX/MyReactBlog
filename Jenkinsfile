pipeline {
    agent any 
    stages {
        stage('Download repo') {
            steps {
                git 'https://github.com/RamzesX/my-app/'
                
            }
        }
        stage("Install packets") {
            steps {
                sh 'npm install'
                sh 'npm i react-paginate -save'
                sh 'set +e'
                sh 'pm2 stop npm'
                sh 'pm2 delete npm --force'
                sh 'pm2 start npm -- start'
                sh 'set -e'
                
            }
        }
    }
}


