export class BooksService {
    books = [
        {
            "price": {
                "price": "$34.99",
                "skuId": "con001",
                "discountPercentage": "12"
            },
            "rating": {
                "skuId": "con001",
                "rating": "4.7",
                "count": "5"
            },
            "comments": null,
            "product": {
                "skuId": "con001",
                "author": "Jonathan Baier",
                "description": "Orchestrate and manage large-scale Docker deployments with Kubernetes to unlock greater control over your infrastructure and extend your containerization strategy",
                "imageCover": "image-url",
                "title": "Getting Started with Kubernetes"
            }
        },
        {
            "price": {
                "price": "$2.99",
                "skuId": "learn002",
                "discountPercentage": "12"
            },
            "rating": {
                "skuId": "learn002",
                "rating": "4.5",
                "count": "12"
            },
            "comments": null,
            "product": {
                "skuId": "learn002",
                "author": "Scott Hartshorn",
                "description": "If you are looking for a book to help you understand how the machine learning algorithms Random Forest and Decision Trees work behind the scenes, then this is a good book for you.  Those two algorithms are commonly used in a variety of applications including big data analysis for industry and data analysis competitions like you would find on Kaggle. This book explains how Decision Trees work and how they can be combined into a Random Forest to reduce many of the common problems with decision trees, such as overfitting the training data.",
                "imageCover": "image-url",
                "title": "Machine Learning With Random Forests And Decision Trees"
            }
        },
        {
            "price": {
                "price": "$44.99",
                "skuId": "learn001",
                "discountPercentage": "12"
            },
            "rating": {
                "skuId": "learn001",
                "rating": "4.7",
                "count": "3"
            },
            "comments": null,
            "product": {
                "skuId": "learn001",
                "author": "Aur\u00e9lien G\u00e9ron",
                "description": "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.",
                "imageCover": "image-url",
                "title": "Hands-On Machine Learning with Scikit-Learn and TensorFlow"
            }
        }
    ];

    book = {
        "price": {
            "price": "$34.99",
            "skuId": "con001",
            "discountPercentage": "12"
        },
        "rating": {
            "skuId": "con001",
            "rating": "2.4",
            "count": "5"
        },
        "comments": [
            "Better documentation then the kubernetes.io one. I bought this book with the hope that Getting started means instructions and help to install Kubernetes. No, the author uses ready made cloud providers, where Kubernetes is already installed. Too bad that I didn't see this in the preview of this book. Hope you know it through this comment.",
            "It is fine, given the limited alternatives out there, but it reads as if the author gathered together a lot of material and examples and put them into the book without enough attention to providing conceptual background. To a large extent, the approach reads like: type these commands and you'll get it. The book is slightly dated now, since the software is changing. This makes the demo-first method more of an issue than it otherwise would be."
        ],
        "product": {
            "skuId": "con001",
            "author": "Jonathan Baier",
            "description": "Orchestrate and manage large-scale Docker deployments with Kubernetes to unlock greater control over your infrastructure and extend your containerization strategy",
            "imageCover": "image-url",
            "title": "Getting Started with Kubernetes"
        }
    };

    getBooks() {
        return this.books;
    }

    getBook(id: number) {
        return this.book;
    }

}