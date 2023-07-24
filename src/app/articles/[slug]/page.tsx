export default function Article({ params }: { params: { slug: string } }) {
    console.log(params)
    return (
      <div>
        <h1>記事の詳細</h1>
        <p>記事のスラッグ: {params.slug}</p>
       
      </div>
    );
  }