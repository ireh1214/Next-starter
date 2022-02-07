- Next.js에서 보다 빠르게 프로젝트를 만들 수 있는 기본 템플릿을 만들었습니다.

- document.jsx, 404.jsx, index.jsx는 기호에 맞게 사용하시면 되고 404의 경우에는 error.jsx로 이름을 변경헤서 404 이외의 에러에도 대응할 수 있도록 만들 수 있습니다.

- robots.txt는 검색봇을 커스텀 할 수 있는 파일입니다. 지금은 어디에서도 검색이 되지 않도록 설정해 두었습니다.

- 협업을 위한 prittier, ESlint 설정이 되어있는 상태입니다. (각 .prettierrc, .eslintrc.json 입니다) VScode 내에서 오토 세이브를 실행시키려면 setting.json 부분에서 설정을 조금 더 해주어야 합니다. 아래 내용을 추가해주세요!

"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false
},
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"files.autoSave": "onFocusChange",

<hr />

아래는 next에서 사용할 수 있는 명령어입니다.

<h3>npx next dev</h3> 
react의 npm run start에 해당합니다. localhost에 (별다른 설정이 없다면 3000번 포트) 프로젝트를 띄워주고, 화면을 확인할 수 있습니다 기존 react보다 에러를 좀 더 잘보이게 만들어주고 실시간 빌드도 빠릅니다.

<h3>npx next build</h3> 
react의 npm run build에 해당합니다. next만의 규칙(ex. next-link 등)이 있기 때문에 배포 전 이것들이 잘 지켜졌는지 확인하는 것이 좋습니다!
