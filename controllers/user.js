import User from '../models/user';
export const userById = async(req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if (!user) {
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;

        next();
    } catch (error) {

    }
}
export const list = async(req, res) => {
    try {
        const ListUser = await User.find();
        res.json(ListUser);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm "
        })
    }

}

export const post = async(req, res) => {
        try {
            const user = await new User(req.body).save();
            res.json(user);
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm"
            })
        }

    }
    //update 
export const update = async(req, res) => {
        try {
            const UpdateUser = await User.findByIdAndUpdate(req.params.id, req.body)
            res.json(UpdateUser);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    //
export const read = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const remove = async(req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.id)
        res.json(removeUser);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}