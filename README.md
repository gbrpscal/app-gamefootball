# app-gamefootball
Aplicativo mobile futuro

Para que possa dar início à configuração, necessário rodar o comando "npm i".
Para inciar o desenvolvimento após isso, rodar:
- npm run start:dev // Comando para iniciar o server do NestJs;
- npx expo start // Necessário configurar a conexão com o aparelho celular ou emulador usando o Expo. // No meu caso, utilizo o comando com o "--tunnel"
- Para exibir o "layout" do banco. rodar "npx prisma studio";
pois dessa forma consigo realizar a abertura do aplicativo de forma simplificada.

As configurações e vínculo com o Banco de Dados, por hora se dá de forma manual via Prisma:
https://docs.nestjs.com/recipes/prisma

Documentações utilizada:
- https://docs.nestjs.com
- https://www.nativewind.dev
- https://docs.expo.dev
- https://tailwindcss.com/docs/installation

Qualquer dúvida, liga nois.
Padrões de Commit:
- Bug:
"FXT: {Erro ocorrido} + {Ação tomada}";
- Features:
"FTR: {Adição realizada} + {Local da inclusão}

**Em caso de componente maior, deixar documentado em um novo arquivo chamado "Versions.txt"**
