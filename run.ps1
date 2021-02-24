$proj_dir = "C:\Users\armyj\Documents\GitHub\BridgeHospice\client"  
$cmd = $args[0]                             

if ($cmd -eq "update") {
    tsc
    $filename = npm pack                    #   Pack current project into tarball
    $curr_dir = Get-Location                #   Save current directory
    Set-Location $proj_dir                  #   Change directory to project directory
    npm install "$curr_dir\$filename"       #   Install the library into project
    Set-Location $curr_dir                  #   Change location back to current directory
}

if ($cmd -eq "patch") {
    tsc                                     #   TypeScript Compile
    git add .                               #   Add Git Changes
    git commit -am 'patch update'           #   Commit Git Changes   TODO: add comment parameter
    git push origin master                  #   Push to Master Branch
    npm version patch                       #   npm version patch
    npm publish                             #   npm publish
}

if ($cmd -eq "push") {
    git add .                               #   Add Git Changes
    git commit -am 'patch update'           #   Commit Git Changes   TODO: add comment parameter
    git push origin master                  #   Push to Master Branch
}