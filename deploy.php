<?php
    /**
     * GIT DEPLOYMENT SCRIPT
     *
     * Used for automatically deploying websites via GitHub
     * Doyd3diR0woD9as7Git2dEf4e
     */

    // array of commands
    $commands = array(
        'echo $PWD',
        'whoami',
        'git pull',
        'git status',
       // 'git submodule sync',
       // 'git submodule update',
       // 'git submodule status',
    );

    // exec commands
    if (($_SERVER['SERVER_NAME'] == 'staging.scratchjr.org' &&
        htmlspecialchars($_GET["token"]) == "Doyd3diR0woD9as7Git2dEf4e") ||
        ($_SERVER['SERVER_NAME'] == 'scratchjr.org' &&
         htmlspecialchars($_GET["token"]) == "Doyd3diR0woD9as7Git2dEf4e")) {

      $output = $_SERVER['SERVER_NAME'] . '</p>';
      foreach($commands AS $command){
          $tmp = shell_exec($command);
          $output .= "<span style=\"color: #6BE234;\">\$</span><span style=\"color: #729FCF;\">{$command}\n</span><br />";
          $output .= htmlentities(trim($tmp)) . "\n<br /><br />";
      }
    } else {
      header('HTTP/1.0 403 Forbidden');
      $output = $_SERVER['SERVER_NAME'] . ': Wrong token</p>';

    }
?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>GIT DEPLOYMENT SCRIPT</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<div style="width:700px">
    <div style="float:left;width:350px;">
    <p style="color:white;">Git Deployment Script</p>
    <?php echo $output; ?>
    </div>
</div>
</body>
</html>

