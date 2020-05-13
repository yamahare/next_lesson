import Link from 'next/link';
// import Calc from '../components/Calc'
import Sampledata from '../components/Sampledata'
import Layout from '../components/Layout'
import Image from '../static/Image'

export default () => <div>
    <Layout header="Next.js" title="おもろトップ">
        {/* <Calc></Calc> */}
        <Sampledata></Sampledata>
        <Image fname="1.jpg" size="100"></Image>
        <div>
            <Link href="/other">
                <button>他のページへ</button>
            </Link>
            <br></br>
            <Link href="/fire_find">
                <button>データ検索</button>
            </Link>
            <br></br>
            <Link href="/fire_add">
                <button>データ追加</button>
            </Link>
            <br></br>
            <Link href="/fire_del">
                <button>データ削除</button>
            </Link>
            <br></br>
            <br></br>
            <Link href="/address">
                <button>アドレスアプリ</button>
            </Link>
        </div>
    </Layout>
</div>
