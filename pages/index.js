import Link from 'next/link';
import style from '../static/Style'
import Counter from '../components/Counter'

export default () => <div>
    {style}
    <h1>Next.js</h1>
    <p>ようこそNextjsです。＼(^o^)／</p>
    <Counter></Counter>
    <hr/>
    <div>
        <Link href="/other">
            <button>他のページへ</button>
        </Link>
    </div>
</div>