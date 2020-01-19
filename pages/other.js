import Link from 'next/link';
import Layout from '../components/Layout'
// import Calc from '../components/Calc'
import Sampledata from '../components/Sampledata'

export default () => <div>
    <Layout header="Other" title="他のページです。">
        {/* <Calc></Calc> */}
        <Sampledata></Sampledata>
        <div>
            <Link href="/">
                <button>トップへ戻る</button>
            </Link>
        </div>
    </Layout>
</div>