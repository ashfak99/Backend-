import {Router} from "express";

import {
    createTweet,
    getTweet,
    replyByTweet,
    likeTweet
} from "../controllers/tweet.controller.js"

import {
    follow,
    unfollow,
    getFollowing,
    getFollower
} from "../controllers/follow.controller.js"

import {verifyJWT} from "../../user/middlewares/auth.middlware.js"

const router = Router();

//tweet
router.route("/create").post(verifyJWT,createTweet);
router.route("/tweet").get(getTweet);
router.route("/reply").post(verifyJWT,replyByTweet)
router.route("/like").post(verifyJWT,likeTweet)

//follow
router.route("/follow").post(verifyJWT,follow);
router.route("/unfollow").post(verifyJWT,unfollow);
router.route("/followers").get(verifyJWT,getFollower);
router.route("/following").get(verifyJWT,getFollowing);

export default router;