import Link from 'next/link';
import Counter from '../components/Counter'
import Layout from '../components/Layout'

export default () => <div>
    <Layout header="Next.js" title="ようこそNextjsです。＼(^o^)／">
        <Counter></Counter>
        <div>
            <Link href="/other">
                <button>他のページへ</button>
            </Link>
        </div>
    </Layout>
</div>