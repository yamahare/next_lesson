import Link from 'next/link';
// import Calc from '../components/Calc'
import Sampledata from '../components/Sampledata'
import Layout from '../components/Layout'
import Image from '../static/Image'

export default () => <div>
    <Layout header="Next.js" title="ようこそNextjsです。＼(^o^)／">
        {/* <Calc></Calc> */}
        <Sampledata></Sampledata>
        <Image fname="1.jpg" size="100"></Image>
        <div>
            <Link href="/other">
                <button>他のページへ</button>
            </Link>
        </div>
    </Layout>
</div>