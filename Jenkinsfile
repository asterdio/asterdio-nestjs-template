pipeline{
    agent any
    stages{
        stage("Test"){
            steps{
                echo "Hello World"
            }
        }
        stage("Deploy"){
            steps{
                sshagent(['credentials']) {
                    // some block
                    sh "ssh -o StrictHostKeyChecking=no root@[server_ip]/deploy/[deploy_script].sh"
                }
            }
        }
    }
        post {
            success {
                slackSend (color: "good", channel: [channel_name], message:"Build deployed successfully,  took ${currentBuild.durationString}  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
         }
            failure {
                slackSend (color: "bad", channel: [channel_name], message:"Build failed, took ${currentBuild.durationString}  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
            }
        }
}
