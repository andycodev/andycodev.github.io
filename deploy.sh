# Deploy production

# Primero dar permiso a deploy.sh
#chmod +x deploy.sh 

# Ejecutar deploy.sj
#./deploy.sh 


#!/usr/bin/env sh/deply

# abort on errors
set -e

echo "iniciando ..."

# Verificamos que si existe directorio docs
#if [ -d docs ]
#then
  # Si existe directorio lo eliminamos
  # rm -rf docs
  # echo "El directorio docs eliminado"

#fi

  # Si no existe directorio dos
  echo "Construimos para producción"
  # Construimos para producción
   npm run build

  echo "Creamos carpeta docs"

  mkdir docs

  echo "Copiamos contenido"
   cp -rl dist docs 

  echo "Eliminamos dist" 
  rm -rf dist

   # Renombramos la carpeta dist por docs
   #mv -f dist docs

   # Agregamos todos los archivos modificados al repo
   git add .

   git commit -m "deploying"

   git push

   echo "deploy success"


cd -
