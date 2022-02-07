import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (  
            <Html>
                <Head>
                      <title>Document로 가세여</title>
                    <meta charset="UTF-8" />
                    <meta name="description" content="날득씨의 프로필 사이트예요" />
                    {/* <meta name="keywords" content="키워드,프로필,설명서,달늑대,날득씨" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    {/* <meta property="og:image" content="./other/mainimage.png" /> 
          이거 그거임 미리보기 이미지
          */}

                    {/* <meta
            property="og:description"
            content="@Hi_wolfy의 커미션 사이트입니다!"
          />
          <meta property="og:title" content="Hi-wolfy's commission" /> */}

                    {/* reset */}

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />

                    {/* 파비콘 */}
                    <link rel="icon" href="/favicon.ico" />

                    {/* 부트스트랩 */}

                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossorigin="anonymous"
                    />
                    <script
                        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                        crossorigin="anonymous"
                    ></script>
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                        crossorigin="anonymous"
                    ></script>

                    {/* 메인 폰트 */}

                    <link href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />
                    <link href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet" />

                    {/* 트윈맥스 */}

                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
                    <script type="text/javascript" src="https://unpkg.com/gsap@3/dist/ScrollToPlugin.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
