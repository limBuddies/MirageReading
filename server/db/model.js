const sequelize = require('./db')
const {Model, DataTypes} = require('sequelize');

// 参考：https://sequelize.org/master/manual/model-basics.html


// 用户表
class User extends Model {
}

User.init({
    nickname: {type: DataTypes.STRING, notnull: true},
    email: {type: DataTypes.STRING, unique: true, notnull: true},
    password: {type: DataTypes.STRING, notnull: true},
    intro: {type: DataTypes.STRING, notnull: true},
    avatar: {type: DataTypes.STRING, notnull: true},
    vipTill: {type: DataTypes.DATE},
    income: {type: DataTypes.FLOAT},
}, {
    sequelize,
    tableName: 'user',
});


// 拼写表
class Word extends Model {
}

Word.init({
    spell: {type: DataTypes.STRING, notnull: true},
}, {
    sequelize,
    tableName: 'word',
});


// 评分表
class Rate extends Model {
}

Rate.init({
    star: {type: DataTypes.INTEGER, notnull: true},
    total: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'rate'
});


// 关注表
class Follow extends Model {
}

Follow.init({}, {
    sequelize,
    tableName: 'follow',
});

Follow.belongsTo(User, {as: 'from'});
Follow.belongsTo(User, {as: 'to'});


// 系统消息表
class Message extends Model {
}

Message.init({
    read: {type: DataTypes.BOOLEAN, notnull: true},
    content: {type: DataTypes.STRING, notnull: true}
}, {
    sequelize,
    tableName: 'message'
});

Message.belongsTo(User, {as: 'receiver'});


// 词库表
class Collection extends Model {
}

Collection.init({
    name: {type: DataTypes.STRING, notnull: true},
    prize: {type: DataTypes.FLOAT},
    borrow: {type: DataTypes.BOOLEAN},
    free: {type: DataTypes.BOOLEAN}
}, {
    sequelize,
    tableName: 'collection',
});

Collection.belongsTo(User, {as: 'creator'});
Collection.belongsTo(Rate, {as: 'rate'});


// 词条表
class Entry extends Model {
}

Entry.init({
    tcn: {type: DataTypes.STRING, notnull: true},
    ten: {type: DataTypes.STRING, notnull: true},
    data: {type: DataTypes.STRING, notnull: true}
}, {
    sequelize,
    tableName: 'entry',
});

Entry.belongsTo(Collection, {as: 'collection'});
Entry.belongsTo(Word, {as: 'word'});


// 书籍表
class Book extends Model {
}

Book.init({
    title: {type: DataTypes.STRING, notnull: true},
    subtitle: {type: DataTypes.STRING, notnull: true},
    creator: {type: DataTypes.STRING, notnull: true},
    isbn: {type: DataTypes.STRING, notnull: true},
    cover: {type: DataTypes.STRING, notnull: true},
    file: {type: DataTypes.STRING, notnull: true},
    prize: {type: DataTypes.FLOAT, notnull: true},
    borrow: {type: DataTypes.BOOLEAN, notnull: true},
    intro: {type: DataTypes.STRING, notnull: true}
}, {
    sequelize,
    tableName: 'book',
});

Book.belongsTo(Rate, {as: 'rate'});


// 书架表
class BookShelf extends Model {
}

BookShelf.init({
    process: {type: DataTypes.FLOAT, notnull: true},
    paid: {type: DataTypes.BOOLEAN, notnull: true}
}, {
    sequelize,
    tableName: 'bookshelf',
});

BookShelf.belongsTo(User, {as: 'owner'});
BookShelf.belongsTo(Book, {as: 'book'});


// 词库收藏表
class CollectionShelf extends Model {
}

CollectionShelf.init({
    paid: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'collectionShelf'
});

CollectionShelf.belongsTo(User, {as: 'owner'});
CollectionShelf.belongsTo(Collection, {as: 'collection'});


// 生词表
class Unfamiliar extends Model {
}

Unfamiliar.init({}, {
    sequelize,
    tableName: 'unfamiliar'
});

Unfamiliar.belongsTo(User, {as: 'owner'});
Unfamiliar.belongsTo(Word, {as: 'word'});


// 笔记表
class Note extends Model {
}

Note.init({
    origin: {type: DataTypes.STRING, notnull: true},
    annotation: {type: DataTypes.STRING, notnull: true}
}, {
    sequelize,
    tableName: 'note'
});

Note.belongsTo(User, {as: 'owner'});
Note.belongsTo(Book, {as: 'book'});


// 动弹表
class Tweet extends Model {
}

Tweet.init({
    device: {type: DataTypes.STRING, notnull: true},
    forward: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'tweet'
});

Tweet.belongsTo(User, {as: 'publisher'});


// 回复表
class Reply extends Model {
}

Reply.init({
    toId: {type: DataTypes.INTEGER, notnull: true},
    content: {type: DataTypes.STRING, notnull: true}
}, {
    sequelize,
    tableName: 'reply'
});

Reply.belongsTo(Tweet, {as: 'tweet'});
Reply.belongsTo(User, {as: 'publisher'});


// 点赞表
class Like extends Model {
}

Like.init({}, {
    sequelize,
    tableName: 'like'
});

Like.belongsTo(Reply, {as: 'reply'});
Like.belongsTo(User, {as: 'liker'});


// 阅读记录表
class ReadRecord extends Model {
}

ReadRecord.init({
    start: {type: DataTypes.DATE, notnull: true},
    end: {type: DataTypes.DATE, notnull: true}
}, {
    sequelize,
    tableName: 'readRecord'
});

ReadRecord.belongsTo(User, {as: 'owner'});
ReadRecord.belongsTo(Book, {as: 'book'});


// 背诵记录表
class ReciteRecord extends Model {
}

ReciteRecord.init({
    start: {type: DataTypes.DATE, notnull: true},
    end: {type: DataTypes.DATE, notnull: true}
}, {
    sequelize,
    tableName: 'reciteRecord'
});

ReciteRecord.belongsTo(User, {as: 'owner'});
ReciteRecord.belongsTo(Collection, {as: 'collection'});


// 词频统计表
class WordFrequency extends Model {
}

WordFrequency.init({
    count: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'wordFrequency'
});

WordFrequency.belongsTo(Word, {as: 'word'});


// 最热书籍
class HottestBook extends Model {
}

HottestBook.init({
    rank: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'hottestBook'
});

HottestBook.belongsTo(Book, {as: 'book'});


// 最热词库
class HottestCollection extends Model {
}

HottestCollection.init({
    rank: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'hottestCollection'
});

HottestCollection.belongsTo(Collection, {as: 'collection'});


// 最热动弹
class HottestTweet extends Model {
}

HottestTweet.init({
    rank: {type: DataTypes.INTEGER, notnull: true}
}, {
    sequelize,
    tableName: 'hottestTweet'
});

HottestTweet.belongsTo(Tweet, {as: 'tweet'});