
export class TransactionRepository {
    constructor(db) {
        this.db = db;
    }

    async find(userId) {
        return await this.db.transaction.findMany({ where: { userId }});
    }

    async findById(id, userId) {
        return await this.db.transaction.findFirst({
            where: {id , userId},
            include: { movements: true },
        });
    }

    async create(data) {
        return await this.db.transaction.create({ data });

    }
    
}
