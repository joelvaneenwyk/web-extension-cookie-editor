<#
.SYNOPSIS
    Create archives for Chrome and Firefox extensions.
#>

try {
    $buildPath = "./build"
    If (!(Test-Path $buildPath)) {
        New-Item -ItemType Directory -Force -Path $buildPath
    }

    # for loop over "edge" "chrome" "firefox"
    foreach ($browser in "edge", "chrome", "firefox", "opera", "safari") {
        Copy-Item "manifest.$browser.json" -Destination "manifest.json"
        Compress-Archive -LiteralPath `
            icons/, `
            interface/, `
            cookie-editor.js, `
            manifest.json `
            -CompressionLevel Optimal `
            -Force `
            -DestinationPath "${buildPath}/build-$browser.zip"
    }
}
catch {
    Write-Host "Package error. $($_.Exception.Message)"
}
finally {
    Write-Host "Package process for Cookie Editor completed."
}
