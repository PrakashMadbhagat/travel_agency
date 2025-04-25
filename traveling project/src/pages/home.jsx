import styles from "../css/home.module.css";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const Home = () => {
    const blogPosts = [
        {
            title: "New Year, New Resolutions!",
            url: "https://setsail.qodeinteractive.com/new-year-new-resolutions/",
            imgSrc: "https://setsail.qodeinteractive.com/wp-content/uploads/2016/09/blog-img-19.jpg",
            date: "September 7, 2016",
            excerpt: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,",
            commentsUrl: "https://setsail.qodeinteractive.com/new-year-new-resolutions/#comments",
            commentsCount: 1,
        },
        {
            title: "7 New Year Party Ideas",
            url: "https://setsail.qodeinteractive.com/7-new-year-party-ideas/",
            imgSrc: "https://setsail.qodeinteractive.com/wp-content/uploads/2016/09/blog-img-18.jpg",
            date: "September 11, 2016",
            excerpt: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,",
            commentsUrl: "https://setsail.qodeinteractive.com/7-new-year-party-ideas/#comments",
            commentsCount: 1,
        },
    ];
    const reviews = [
        {
            id: 1,
            text: "This service was amazing! Highly recommend to everyone.",
            author: "John Doe",
            position: "CEO, Company A",
            image: "https://tse4.mm.bing.net/th?id=OIP.uyeww7tRn0Mxm8LC02bbxQHaE7&pid=Api&P=0&h=180"
        },
        {
            id: 2,
            text: "A fantastic experience from start to finish. Will use again!",
            author: "Jane Smith",
            position: "Manager, Company B",
            image: "https://tse2.mm.bing.net/th?id=OIP.wBBMi-cEyfb-CR80xuQqNAHaE8&pid=Api&P=0&h=180"
        },
        {
            id: 4,
            text: "Professional and efficient. I couldn't be happier!",
            author: "Alice Johnson",
            position: "Director, Company C",
            image: "https://tse4.mm.bing.net/th?id=OIP.oYSo7zO3kDXqpVvMPJN_9gAAAA&pid=Api&P=0&h=180"
        },
        {
            id: 5,
            text: "Professional and efficient. I couldn't be happier!",
            author: "Alice Johnson",
            position: "Director, Company C",
            image: "https://tse3.mm.bing.net/th?id=OIP.XlJcJJNNn2XRYIg30t5FnAHaE-&pid=Api&P=0&h=180"
        },
        {
            id: 6,
            text: "Professional and efficient. I couldn't be happier!",
            author: "Alice Johnson",
            position: "Director, Company C",
            image: "https://tse2.mm.bing.net/th?id=OIP.DtyOFqJcBK8gdM160xjgugHaE8&pid=Api&P=0&h=180"
        },
        {
            id: 7,
            text: "Professional and efficient. I couldn't be happier!",
            author: "Alice Johnson",
            position: "Director, Company C",
            image: "https://tse1.mm.bing.net/th?id=OIP.1D1p9LXWdFUJLPoJwwqkYgHaE8&pid=Api&P=0&h=180"
        },
    ];
    const settings = {
        dots: false,
        infinite: false, // Disable infinite loop for better spacing
        speed: 500,
        slidesToShow: 3, // Show 3 slides instead of 4
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    
    return (
        <>
            {/* banner */}
            <section className={styles.banner}>
                <div className="container pt-lg-2 h-100">
                    <div className="row align-content-center h-100">
                        <div className="col-12 col-md-9 col-lg-8 col-xl-6 px-0 d-flex align-items-center">
                            <div className="col-12">
                                <h1 className="display-xxl-4 fw-bolder text-dark text-center text-md-start">
                                    More Follow up, More Revenue
                                </h1>
                                <p className="text-gray col-12 col-md-10 col-xl-11 col-xxl-9 mt-2 text-center text-md-start">
                                    Never lose your leads again, Leads Management CRM helps to qualify, analyze, and nurture every lead.
                                </p>
                                <div className="col-12 mt-3 text-center text-md-start">
                                    <a href="#" className="btn text-white btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 p-2 d-none d-xl-block">
                            <img
                                src="/images/traveller.png"
                                alt="traveller"
                                className="traveller_img mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* about */}
            <section className={`${styles.about} py-3`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-5 vc_col-md-offset-0 vc_col-md-10 vc_col-sm-offset-0 vc_col-xs-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="qodef-elements-holder qodef-one-column qodef-responsive-mode-768">
                                            <div className="qodef-eh-item">
                                                <div className="qodef-eh-item-inner">
                                                    <div className="qodef-eh-item-content qodef-eh-custom-7400" >
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                                                    <img
                                                                        width="420"
                                                                        height="420"
                                                                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1.png"
                                                                        className="vc_single_image-img attachment-full"
                                                                        alt="d"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                        title="about-us-img-1"
                                                                        srcSet="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1.png 420w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1-150x150.png 150w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1-300x300.png 300w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1-100x100.png 100w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1-75x75.png 75w"
                                                                        sizes="(max-width: 420px) 100vw, 420px"
                                                                    />
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="qodef-section-title-holder">
                                <div className="qodef-st-inner">
                                    <h2 className="qodef-st-title">Our Popular Tours</h2>
                                    <p className="qodef-st-text" style={{ fontSize: '17px', lineHeight: '28px', marginTop: '15px' }}>
                                        Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet.
                                    </p>
                                </div>
                            </div>
                            <div className="wpb_text_column wpb_content_element">
                                <div className="wpb_wrapper">
                                    <p>
                                        Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue verit contentio nes, an his cibo blandit tacimates. Iusto iudi cabit sim ilique id velex, in sea rebum deseruisse appellantur. Etiam rhoncus. Maec enas tempus, tellus eget condimentum rhoncus. Aliquam lorem ante, dapibus in, viverra quis, feugiat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blogs */}
            <section className={styles.blogs}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="qodef-st-title">From Our Blog</h2>
                            <p className="qodef-st-text col-10" style={{
                                fontSize: "17px",
                                lineHeight: "28px",
                            }}>
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
                            </p>

                            <div className="col-11 qodef-blog-list-holder qodef-grid-list qodef-disable-bottom-space qodef-bl-simple qodef-one-columns qodef-normal-space qodef-bl-pag-no-pagination">
                                <div className="qodef-bl-wrapper qodef-outer-space">
                                    <ul className="qodef-blog-list ">
                                        {blogPosts.map((post, index) => (
                                            <li key={index} className="qodef-bl-item qodef-item-space clearfix mt-3">
                                                <div className="qodef-bli-inner">
                                                    <div className="qodef-post-image">
                                                        <a href={post.url} title={post.title}>
                                                            <img src={post.imgSrc} alt={post.title} />
                                                        </a>
                                                    </div>
                                                    <div className="qodef-bli-content">
                                                        <h4 className="entry-title qodef-post-title">
                                                            <a href={post.url} title={post.title}>{post.title}</a>
                                                        </h4>
                                                        <div className="qodef-post-excerpt-holder">
                                                            <p className="qodef-post-excerpt">{post.excerpt}</p>
                                                        </div>
                                                        <div className="qodef-bli-info">
                                                            <div className="qodef-post-info-date entry-date published updated">
                                                                <a href={post.url}>{post.date}</a>
                                                            </div>
                                                            <div className="qodef-post-info-comments-holder">
                                                                <a className="qodef-post-info-comments" href={post.commentsUrl}>
                                                                    <span className="qodef-icon-linear-icons lnr lnr-bubble qodef-post-info-comments-icon"></span>
                                                                    {post.commentsCount} Comment{post.commentsCount > 1 ? "s" : ""}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-5 vc_col-md-offset-0 vc_col-md-10 vc_col-sm-offset-0">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="qodef-elements-holder qodef-one-column qodef-responsive-mode-768">
                                            <div
                                                className="qodef-eh-item"
                                                data-item-class="qodef-eh-custom-6914"
                                                data-1367-1600="154px 32px 0"
                                                data-1025-1366="150px 22px 0"
                                                data-769-1024="66px 0px 143px"
                                                data-681-768="67px 0px 146px"
                                                data-680="67px 0px 150px"
                                            >
                                                <div className="qodef-eh-item-inner">
                                                    <div
                                                        className="qodef-eh-item-content qodef-eh-custom-6914"
                                                    >
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                                                    <img
                                                                        width="397"
                                                                        height="454"
                                                                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/new-img-1.png"
                                                                        className="vc_single_image-img attachment-full"
                                                                        alt="Featured Image"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                        title="new-img-1"
                                                                        srcSet="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/new-img-1.png 397w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/new-img-1-262x300.png 262w"
                                                                        sizes="(max-width: 397px) 100vw, 397px"
                                                                    />
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* restourant */}
            <section className={`${styles.about} pb-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="qodef-eh-item qodef-horizontal-alignment-center"
                                data-item-class="qodef-eh-custom-2567"
                                data-769-1024="0 0 48px 0"
                                data-681-768="0 0 48px 0"
                                data-680="0 45px 48px">
                                <div className="qodef-eh-item-inner">
                                    <div className="qodef-eh-item-content qodef-eh-custom-2567" style={{ padding: '0 45px' }}>
                                        <div className="qodef-iwt clearfix qodef-iwt-icon-top qodef-iwt-icon-medium">
                                            <div className="qodef-iwt-icon text-center">
                                                <img
                                                    width="76"
                                                    height="78"
                                                    src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png"
                                                    className="attachment-full size-full"
                                                    alt="a"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png 76w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1-73x75.png 73w"
                                                    sizes="(max-width: 76px) 100vw, 76px"
                                                />
                                            </div>
                                            <div className="qodef-iwt-content text-center">
                                                <h5 className="qodef-iwt-title" style={{ marginTop: '-4px' }}>
                                                    <span className="qodef-iwt-title-text">Restaurants</span>
                                                </h5>
                                                <p className="qodef-iwt-text">Aenean commodo ligula eget dolor. Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="qodef-eh-item qodef-horizontal-alignment-center"
                                data-item-class="qodef-eh-custom-2567"
                                data-769-1024="0 0 48px 0"
                                data-681-768="0 0 48px 0"
                                data-680="0 45px 48px">
                                <div className="qodef-eh-item-inner">
                                    <div className="qodef-eh-item-content qodef-eh-custom-2567" style={{ padding: '0 45px' }}>
                                        <div className="qodef-iwt clearfix qodef-iwt-icon-top qodef-iwt-icon-medium">
                                            <div className="qodef-iwt-icon text-center">
                                                <img
                                                    width="76"
                                                    height="78"
                                                    src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png"
                                                    className="attachment-full size-full"
                                                    alt="a"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcset="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png 76w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2-73x75.png 73w"
                                                    sizes="(max-width: 76px) 100vw, 76px"
                                                />
                                            </div>
                                            <div className="qodef-iwt-content text-center">
                                                <h5 className="qodef-iwt-title" style={{ marginTop: '-4px' }}>
                                                    <span className="qodef-iwt-title-text">Restaurants</span>
                                                </h5>
                                                <p className="qodef-iwt-text">Aenean commodo ligula eget dolor. Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="qodef-eh-item qodef-horizontal-alignment-center"
                                data-item-class="qodef-eh-custom-2567"
                                data-769-1024="0 0 48px 0"
                                data-681-768="0 0 48px 0"
                                data-680="0 45px 48px">
                                <div className="qodef-eh-item-inner">
                                    <div className="qodef-eh-item-content qodef-eh-custom-2567" style={{ padding: '0 45px' }}>
                                        <div className="qodef-iwt clearfix qodef-iwt-icon-top qodef-iwt-icon-medium">
                                            <div className="qodef-iwt-icon text-center">
                                                <img
                                                    width="76"
                                                    height="78"
                                                    src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png"
                                                    className="attachment-full size-full"
                                                    alt="a"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcset="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png 76w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3-73x75.png 73w"
                                                    sizes="(max-width: 76px) 100vw, 76px"
                                                />
                                            </div>
                                            <div className="qodef-iwt-content text-center">
                                                <h5 className="qodef-iwt-title" style={{ marginTop: '-4px' }}>
                                                    <span className="qodef-iwt-title-text">Restaurants</span>
                                                </h5>
                                                <p className="qodef-iwt-text">Aenean commodo ligula eget dolor. Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="qodef-eh-item qodef-horizontal-alignment-center"
                                data-item-class="qodef-eh-custom-2567"
                                data-769-1024="0 0 48px 0"
                                data-681-768="0 0 48px 0"
                                data-680="0 45px 48px">
                                <div className="qodef-eh-item-inner">
                                    <div className="qodef-eh-item-content qodef-eh-custom-2567" style={{ padding: '0 45px' }}>
                                        <div className="qodef-iwt clearfix qodef-iwt-icon-top qodef-iwt-icon-medium">
                                            <div className="qodef-iwt-icon text-center">
                                                <img
                                                    width="76"
                                                    height="78"
                                                    src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png"
                                                    className="attachment-full size-full"
                                                    alt="a"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcset="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png 76w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4-73x75.png 73w"
                                                    sizes="(max-width: 76px) 100vw, 76px"
                                                />
                                            </div>
                                            <div className="qodef-iwt-content text-center">
                                                <h5 className="qodef-iwt-title" style={{ marginTop: '-4px' }}>
                                                    <span className="qodef-iwt-title-text">Restaurants</span>
                                                </h5>
                                                <p className="qodef-iwt-text">Aenean commodo ligula eget dolor. Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact */}
            <section className={`${styles.contect} py-3 mt-4`}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="qodef-st-inner">
                                <h2 className="qodef-st-title">Contact Us Now</h2>
                                <p className="qodef-st-text" style={{ fontSize: '17px', lineHeight: '28px', marginTop: '15px' }}>
                                    Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn ea diam ea. Piber Korem sit amet.
                                </p>
                            </div>
                            <div className="wpb_text_column wpb_content_element mt-3">
                                <div className="wpb_wrapper">
                                    <p>
                                        Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue verit contentiones, an his cibo blandit tacimates. Iusto iudi cabit similique id velex, in sea rebum deseruisse appellantur. Maecenas cibo blandit tacimates sint posse.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 mt-3 text-center text-md-start">
                                <a href="#" className="btn text-white btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Contect Now
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                width="526"
                                height="338"
                                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/contact-us-img-1.jpg"
                                className="vc_single_image-img attachment-full"
                                alt="d"
                                decoding="async"
                                loading="lazy"
                                title="contact-us-img-1"
                                srcSet="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/contact-us-img-1.jpg 526w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/contact-us-img-1-300x193.jpg 300w, https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/contact-us-img-1-117x75.jpg 117w"
                                sizes="(max-width: 526px) 100vw, 526px"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* clint review */}
            <section className={`${styles.contect} py-3 mt-4 mb-5   `}>
                <div className="container">
                    <div className="row">
                        <div className="client-review-slider col-12">
                            <h2>Client Reviews</h2>
                            <Slider {...settings}>
                                {reviews.map(review => (
                                    <div key={review.id} className="review-item">
                                        <img className="mx-auto" src={review.image} alt={review.author} />
                                        <p>{review.text}</p>
                                        <h5>{review.author}</h5>
                                        <p>{review.position}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;



//setsail.qodeinteractive.com/