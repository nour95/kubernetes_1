pipeline {
   agent any
   environment {
       registry = "nouralhuda95/j1"
   }
   stages {
       stage('Build') {
           agent { dockerfile true }
           steps {
               // Create our project directory.
               sh 'echo testing jenkins'
           }
       }

       stage('Publish') {
           steps{
               script {
                   def appimage = docker.build(registry + ":$BUILD_NUMBER")
                   docker.withRegistry( '', 'docker-token' ) {
                       appimage.push()
                   }
               }
           }
       }
       stage ('Deploy') {
           steps {
               script{
                   def image_id = registry + ":$BUILD_NUMBER"
                sh "ansible-playbook  playbook.yml --extra-vars \"image_id=${image_id}\""
               }
           }
       }
   }
}
