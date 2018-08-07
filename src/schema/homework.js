import { schema } from 'normalizr'

const author = new schema.Entity('author', {}, {
    idAttribute:'mid'
});



const commentsItem = new schema.Entity('commentsItem', {}, {
    idAttribute:'id'
});

const comments = new schema.Array(commentsItem)


const homework = new schema.Entity('homeworkIds',{
    author:author,
    comments:comments
}, {
    idAttribute:'id'
});

export const HOMEWORK = [ homework ];
