class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes=[]
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const index = this._likes.findIndex((userLikes) => userLikes === username);

        if (index === -1) {
            throw new Error(`You can't dislike this article!`);
        }

        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || this._comments.findIndex(el => el.id === id) === -1) {

            const newComment = {
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            }

            this._comments.push(newComment);

            return `${username} commented on ${this.title}`;
        }

        const indexComment = this._comments.findIndex(el => el.id === id);

        if (id !== undefined && indexComment !== -1) {

            const newReply = {
                id: `${indexComment + 1}.${this._comments[indexComment].replies.length + 1}`,
                username,
                content
            }

            this._comments[indexComment].replies.push(newReply);

            return `You replied successfully`;
        }
    }

    toString(sortingCriteria) {

        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        if (sortingCriteria === 'username') {

            this._comments.sort((a, b) => a.username.localeCompare(b.username));

            this._comments.forEach(comment => {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            });
        }

        if (sortingCriteria === 'desc') {
            this._comments.sort((a, b) => b.id - a.id);

            this._comments.forEach(comment => {
                comment.replies.sort((a, b) => b.id - a.id);
            });

        }

        this._comments.forEach(comment => {
            output += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
            comment.replies.forEach(reply => {
                output += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
            })
        })

        return output.trim();

    }
}


let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

// John likes this article!
// My Article has 0 likes
// Ammy commented on My Article
// You replied successfully

// Title: My Article
// Creator: Anny
// Likes: 0
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply

// Title: My Article
// Creator: Anny
// Likes: 1
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
