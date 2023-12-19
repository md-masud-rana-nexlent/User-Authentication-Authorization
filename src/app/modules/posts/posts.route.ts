import express from 'express';
import { getPostsFromDB } from './posts.service';

const router = express.Router();

router.get('/', getPostsFromDB);
