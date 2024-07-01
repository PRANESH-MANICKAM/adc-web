// Static import
import React from "react";
import { get, map, startCase } from "lodash";
import { Typography, Flex, Card, Button } from "antd";
// Dynamic import
import "./index.scss";
import Avatar from "antd/es/avatar/avatar";
import { icons } from "../../shared/icons/index";
import constants from "../../shared/constants/reviews.json";

const Reviews: React.FunctionComponent = () => {
    const { Title, Paragraph } = Typography;
    const { Meta } = Card;
    const reviews = get(constants, "temps");
    return (
        <section className="reviewsContainer">
            <Title level={1} className="title">{get(constants, "title")}</Title>
            <Flex className="reviews" gap="middle" wrap justify="center">
                {
                    map(reviews, (item) => {
                        const { name, place, review } = item;
                        return (
                            <>
                                <Card className="reviews-template">
                                    <Meta
                                        avatar={<Avatar src={get(icons, "quote")} className="reviews-avatar" />}
                                        title={<span className="reviews-title">{`${startCase(name)} - ${startCase(place)}`}</span>}
                                        description={
                                            <>
                                                <Paragraph
                                                    className="reviews-description"
                                                    ellipsis={{ rows: 3, expandable: false }}
                                                >
                                                    {review}
                                                </Paragraph>
                                            </>
                                        }
                                    />
                                </Card>
                            </>
                        )
                    })
                }
            </Flex>
            <Flex justify="center" align="center" gap="middle" className="review-actions" wrap>
                <Button shape="round" size="large">{get(constants, ["actions", "addReview"])}</Button>
                <Button shape="round" size="large">{get(constants, ["actions", "viewMore"])}</Button>
            </Flex >
        </section>
    );
}

export default Reviews;