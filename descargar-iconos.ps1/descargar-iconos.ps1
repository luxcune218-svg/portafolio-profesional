# Descarga logotipos SVG transparentes para el portafolio.
# Ejecutar desde la carpeta raiz del proyecto React/Vite.

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$target = Join-Path (Get-Location) 'public\images\tecnologias'
New-Item -ItemType Directory -Force -Path $target | Out-Null

# Archivo = nombre local; Devicon = carpeta del icono en Devicon;
# SimpleIcon = slug alternativo en Simple Icons.
$icons = @(
    @{ File='html5.svg'; Name='HTML5'; Devicon='html5'; SimpleIcon='html5' },
    @{ File='javascript.svg'; Name='JavaScript'; Devicon='javascript'; SimpleIcon='javascript' },
    @{ File='typescript.svg'; Name='TypeScript'; Devicon='typescript'; SimpleIcon='typescript' },
    @{ File='react.svg'; Name='React'; Devicon='react'; SimpleIcon='react' },
    @{ File='bootstrap.svg'; Name='Bootstrap'; Devicon='bootstrap'; SimpleIcon='bootstrap' },
    @{ File='tailwindcss.svg'; Name='Tailwind CSS'; Devicon='tailwindcss'; SimpleIcon='tailwindcss' },
    @{ File='java.svg'; Name='Java'; Devicon='java'; SimpleIcon='java' },
    @{ File='python.svg'; Name='Python'; Devicon='python'; SimpleIcon='python' },
    @{ File='nodejs.svg'; Name='Node.js'; Devicon='nodejs'; SimpleIcon='nodedotjs' },
    @{ File='express.svg'; Name='Express.js'; Devicon='express'; SimpleIcon='express' },
    @{ File='r.svg'; Name='R'; Devicon='r'; SimpleIcon='r' },
    @{ File='scikit-learn.svg'; Name='Scikit-learn'; Devicon='scikitlearn'; SimpleIcon='scikitlearn' },
    @{ File='tensorflow.svg'; Name='TensorFlow'; Devicon='tensorflow'; SimpleIcon='tensorflow' },
    @{ File='pytorch.svg'; Name='PyTorch'; Devicon='pytorch'; SimpleIcon='pytorch' },
    @{ File='android-studio.svg'; Name='Android Studio'; Devicon='androidstudio'; SimpleIcon='androidstudio' },
    @{ File='mysql.svg'; Name='MySQL'; Devicon='mysql'; SimpleIcon='mysql' },
    @{ File='postgresql.svg'; Name='PostgreSQL'; Devicon='postgresql'; SimpleIcon='postgresql' },
    @{ File='sql-server.svg'; Name='Microsoft SQL Server'; Devicon='microsoftsqlserver'; SimpleIcon='microsoftsqlserver' },
    @{ File='sqlite.svg'; Name='SQLite'; Devicon='sqlite'; SimpleIcon='sqlite' },
    @{ File='mongodb.svg'; Name='MongoDB'; Devicon='mongodb'; SimpleIcon='mongodb' },
    @{ File='vscode.svg'; Name='Visual Studio Code'; Devicon='vscode'; SimpleIcon='visualstudiocode' },
    @{ File='antigravity.svg'; Name='Antigravity'; Devicon='antigravity'; SimpleIcon='antigravity' },
    @{ File='rstudio.svg'; Name='RStudio'; Devicon='rstudio'; SimpleIcon='rstudio' },
    @{ File='google-colab.svg'; Name='Google Colab'; Devicon=''; SimpleIcon='googlecolab' },
    @{ File='git.svg'; Name='Git'; Devicon='git'; SimpleIcon='git' },
    @{ File='github.svg'; Name='GitHub'; Devicon='github'; SimpleIcon='github' },
    @{ File='arduino.svg'; Name='Arduino (IoT)'; Devicon='arduino'; SimpleIcon='arduino' }
)

function Test-SvgFile([string]$Path) {
    if (-not (Test-Path $Path)) { return $false }
    try {
        $content = Get-Content -LiteralPath $Path -Raw
        return ($content -match '<svg[\s>]')
    } catch { return $false }
}

function Try-Download([string]$Url, [string]$Destination) {
    try {
        Invoke-WebRequest -Uri $Url -OutFile $Destination -TimeoutSec 25 -UseBasicParsing
        if (Test-SvgFile $Destination) { return $true }
    } catch { }
    Remove-Item -LiteralPath $Destination -Force -ErrorAction SilentlyContinue
    return $false
}

$ok = 0
$failed = @()
Write-Host "`nDescargando iconos en: $target`n" -ForegroundColor Cyan

foreach ($icon in $icons) {
    $destination = Join-Path $target $icon.File
    $downloaded = $false

    if ($icon.Devicon) {
        foreach ($variant in @('original', 'plain', 'original-wordmark', 'plain-wordmark')) {
            $url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/$($icon.Devicon)/$($icon.Devicon)-$variant.svg"
            if (Try-Download $url $destination) { $downloaded = $true; break }
        }
    }

    if (-not $downloaded -and $icon.SimpleIcon) {
        $url = "https://cdn.simpleicons.org/$($icon.SimpleIcon)"
        if (Try-Download $url $destination) { $downloaded = $true }
    }

    if ($downloaded) {
        $ok++
        Write-Host "OK   $($icon.Name)" -ForegroundColor Green
    } else {
        $failed += $icon.Name
        Write-Host "FALTA $($icon.Name) - no se encontro en los catalogos" -ForegroundColor Yellow
    }
}

# Guarda un catalogo para saber que nombre corresponde a cada archivo.
$manifest = @'
[
  { "name": "HTML5", "file": "html5.svg" },
  { "name": "JavaScript", "file": "javascript.svg" },
  { "name": "TypeScript", "file": "typescript.svg" },
  { "name": "React", "file": "react.svg" },
  { "name": "Bootstrap", "file": "bootstrap.svg" },
  { "name": "Tailwind CSS", "file": "tailwindcss.svg" },
  { "name": "Java", "file": "java.svg" },
  { "name": "Python", "file": "python.svg" },
  { "name": "Node.js", "file": "nodejs.svg" },
  { "name": "Express.js", "file": "express.svg" },
  { "name": "R", "file": "r.svg" },
  { "name": "Scikit-learn", "file": "scikit-learn.svg" },
  { "name": "TensorFlow", "file": "tensorflow.svg" },
  { "name": "PyTorch", "file": "pytorch.svg" },
  { "name": "Android Studio", "file": "android-studio.svg" },
  { "name": "MySQL", "file": "mysql.svg" },
  { "name": "PostgreSQL", "file": "postgresql.svg" },
  { "name": "Microsoft SQL Server", "file": "sql-server.svg" },
  { "name": "SQLite", "file": "sqlite.svg" },
  { "name": "MongoDB", "file": "mongodb.svg" },
  { "name": "Visual Studio Code", "file": "vscode.svg" },
  { "name": "Antigravity", "file": "antigravity.svg" },
  { "name": "RStudio", "file": "rstudio.svg" },
  { "name": "Google Colab", "file": "google-colab.svg" },
  { "name": "Git", "file": "git.svg" },
  { "name": "GitHub", "file": "github.svg" },
  { "name": "Arduino", "file": "arduino.svg" }
]
'@
Set-Content -LiteralPath (Join-Path $target 'catalogo-iconos.json') -Value $manifest -Encoding UTF8

Write-Host "`nFinalizado: $ok de $($icons.Count) iconos descargados." -ForegroundColor Cyan
if ($failed.Count -gt 0) {
    Write-Host "Revisa estos iconos si no aparecieron: $($failed -join ', ')" -ForegroundColor Yellow
}
Write-Host "Los SVG tienen fondo transparente y puedes mostrarlos a 32-48 px con CSS." -ForegroundColor Cyan
