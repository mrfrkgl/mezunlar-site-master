import "./singlePost.css";
import toplantı from "../../images/mezunlar-toplantı.jpg";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImage" src={toplantı} alt="" />
                <h1 className="singlePostTitle">
                    2022 Yılı Mezunlar Toplantısı
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostDate">07 / 01 / 2022</span>
                </div>
                <p className="singlePostDescription">
                    Kıymetli dostlar, <br />
                    2022 yılında gerçekleştirilen Mezunlar Buluşması sona
                    ermiştir. <br />
                    <br />
                    Buluşmada; <br />
                    Açılış ve Danışma toplantısı, <br />
                    Bölgesel toplantılar, <br />
                    Dönemsel toplantılar, <br />
                    Ticari Komisyon toplantıları ve eğlence programları
                    gerçekleştirilmiştir. <br />
                    Yeniden buluşmak üzere...<br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique saepe et dolore dolorem, nemo tempora, voluptatem, ab aspernatur odit facilis vel? Nisi, nam? Culpa in dicta illum doloremque quis.lorem
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quia, id ut, veniam adipisci dicta inventore officiis placeat laboriosam quam voluptatum quasi aliquam hic voluptates fuga aspernatur voluptas excepturi? Unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem itaque deleniti quis iusto, laudantium eligendi commodi consectetur libero. Quasi, recusandae? Ipsam explicabo iusto in nemo. Nesciunt quos et eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic similique exercitationem neque eveniet? Sint at adipisci officiis, optio doloremque error. Accusamus quasi dolorum est at! Aliquam autem laudantium quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem, aut placeat ipsa aliquam dicta quisquam sapiente eligendi soluta minus non hic ut praesentium laborum sed eos dolores quos aliquid.
                </p>
            </div>
        </div>
    );
}
