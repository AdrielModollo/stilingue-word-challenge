const globalErrorsMiddlewares = (req, res) => {
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
}

module.exports = { globalErrorsMiddlewares }