import { useEffect } from "react"
import './BottomHero.scss'

import { FaCircleCheck } from "react-icons/fa6";
function BottomHero()
{
    return (
        <div className="my-1">
            <div className="col-12 " id="HomePage">
                <section className="sec2 col-12">
                    <div className="left_div col-5">
                        <img
                            src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2023/01/share.png"
                            alt=""
                        />
                    </div>

                    <div className="right_div col-5">
                        <h2 className="col-12">Want to share your knowledge? Join us a Mentor</h2>
                        <p className="col-10">
                            High-definition video is video of higher resolution and quality than
                            standard-definition. While there is no standardized meaning for
                            high-definition, generally any video.
                        </p>

                        <div className="best_top col-12">
                            <div className="icon_paragraph col-12">
                                <span>
                                    <FaCircleCheck className="text-primaryColor " />
                                </span>
                                <p>Best Courses</p>
                            </div>

                            <div className="icon_paragraph col-12">
                                <span>
                                    <FaCircleCheck className="text-primaryColor " />
                                </span>
                                <p>Top rated Instructors</p>
                            </div>
                        </div>

                        <button>
                            <a>Read More</a>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default BottomHero;