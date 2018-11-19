import { Component } from '@angular/core';
import { Card } from '../card';
import { DropEvent } from 'ng-drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'card-content',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']

})
export class CardComponent {

    cards: Card[];
    otherCards: Card[] = [];

    selectedCategory = 'Choose type';
    showSortByRankButton:boolean=false;

    categories = ['Club','Heart','Spade','Diamond'];

    ngOnInit() {
        this.cards = [

            { cardId: 1, rank: '2', suit: 'club', image: 'assets/img/2C.svg' },
            { cardId: 2, rank: '2', suit: 'heart', image: 'assets/img/2H.svg' },
            { cardId: 3, rank: '2', suit: 'diamond', image: 'assets/img/2D.svg' },
            { cardId: 4, rank: '2', suit: 'spade', image: 'assets/img/2S.svg' },


            { cardId: 5, rank: '3', suit: 'club', image: 'assets/img/3C.svg' },
            { cardId: 6, rank: '3', suit: 'heart', image: 'assets/img/3H.svg' },
            { cardId: 7, rank: '3', suit: 'diamond', image: 'assets/img/3D.svg' },
            { cardId: 8, rank: '3', suit: 'spade', image: 'assets/img/3S.svg' },

            { cardId: 9, rank: '4', suit: 'club', image: 'assets/img/4C.svg' },
            { cardId: 10, rank: '4', suit: 'heart', image: 'assets/img/4H.svg' },
            { cardId: 11, rank: '4', suit: 'diamond', image: 'assets/img/4D.svg' },
            { cardId: 12, rank: '4', suit: 'spade', image: 'assets/img/4S.svg' },

            { cardId: 13, rank: '5', suit: 'club', image: 'assets/img/5C.svg' },
            { cardId: 14, rank: '5', suit: 'heart', image: 'assets/img/5H.svg' },
            { cardId: 15, rank: '5', suit: 'diamond', image: 'assets/img/5D.svg' },
            { cardId: 16, rank: '5', suit: 'spade', image: 'assets/img/5S.svg' },

            { cardId: 17, rank: '6', suit: 'club', image: 'assets/img/6C.svg' },
            { cardId: 18, rank: '6', suit: 'heart', image: 'assets/img/6H.svg' },
            { cardId: 19, rank: '6', suit: 'diamond', image: 'assets/img/6D.svg' },
            { cardId: 20, rank: '6', suit: 'spade', image: 'assets/img/6S.svg' },

            { cardId: 21, rank: '7', suit: 'club', image: 'assets/img/7C.svg' },
            { cardId: 22, rank: '7', suit: 'heart', image: 'assets/img/7H.svg' },
            { cardId: 23, rank: '7', suit: 'diamond', image: 'assets/img/7D.svg' },
            { cardId: 24, rank: '7', suit: 'spade', image: 'assets/img/7S.svg' },

            { cardId: 25, rank: '8', suit: 'club', image: 'assets/img/8C.svg' },
            { cardId: 26, rank: '8', suit: 'heart', image: 'assets/img/8H.svg' },
            { cardId: 27, rank: '8', suit: 'diamond', image: 'assets/img/8D.svg' },
            { cardId: 28, rank: '8', suit: 'spade', image: 'assets/img/8S.svg' },

            { cardId: 29, rank: '9', suit: 'club', image: 'assets/img/9C.svg' },
            { cardId: 30, rank: '9', suit: 'heart', image: 'assets/img/9H.svg' },
            { cardId: 31, rank: '9', suit: 'diamond', image: 'assets/img/9D.svg' },
            { cardId: 32, rank: '9', suit: 'spade', image: 'assets/img/9S.svg' },

            { cardId: 33, rank: '10', suit: 'club', image: 'assets/img/10C.svg' },
            { cardId: 34, rank: '10', suit: 'heart', image: 'assets/img/10H.svg' },
            { cardId: 35, rank: '10', suit: 'diamond', image: 'assets/img/10D.svg' },
            { cardId: 36, rank: '10', suit: 'spade', image: 'assets/img/10S.svg' },

            { cardId: 37, rank: 'A', suit: 'club', image: 'assets/img/AC.svg' },
            { cardId: 38, rank: 'A', suit: 'heart', image: 'assets/img/AH.svg' },
            { cardId: 39, rank: 'A', suit: 'diamond', image: 'assets/img/AD.svg' },
            { cardId: 40, rank: 'A', suit: 'spade', image: 'assets/img/AS.svg' },

            { cardId: 41, rank: 'J', suit: 'club', image: 'assets/img/JC.svg' },
            { cardId: 42, rank: 'J', suit: 'heart', image: 'assets/img/JH.svg' },
            { cardId: 43, rank: 'J', suit: 'diamond', image: 'assets/img/JD.svg' },
            { cardId: 44, rank: 'J', suit: 'spade', image: 'assets/img/JS.svg' },

            { cardId: 45, rank: 'Q', suit: 'club', image: 'assets/img/QC.svg' },
            { cardId: 46, rank: 'Q', suit: 'heart', image: 'assets/img/QH.svg' },
            { cardId: 47, rank: 'Q', suit: 'diamond', image: 'assets/img/QD.svg' },
            { cardId: 48, rank: 'Q', suit: 'spade', image: 'assets/img/QS.svg' },

            { cardId: 49, rank: 'K', suit: 'club', image: 'assets/img/KC.svg' },
            { cardId: 50, rank: 'K', suit: 'heart', image: 'assets/img/KH.svg' },
            { cardId: 51, rank: 'K', suit: 'diamond', image: 'assets/img/KD.svg' },
            { cardId: 52, rank: 'K', suit: 'spade', image: 'assets/img/KS.svg' },

        ]

    }

    onChange(categoryValue) {
        console.log(categoryValue);
     this.otherCards=(this.otherCards.filter(x=>x.suit==categoryValue.toLowerCase()));
     if(this.otherCards.length>0)
     {
         this.showSortByRankButton=true;
     }
    }

    shuffleImage() {
        for (var flips = 0; flips < 100; flips++) {
            var i = Math.floor(Math.random() * this.cards.length);
            var j = Math.floor(Math.random() * this.cards.length);

            for (var flips = 0; flips < 100; flips++) {
                var i = Math.floor(Math.random() * this.cards.length);
                var j = Math.floor(Math.random() * this.cards.length);

                var temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
        }
    }

    drop(event: CdkDragDrop<Card[]>) {

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }

    }

    sortBySuit() {
        this.otherCards.sort((a, b) => {
            if (a.suit < b.suit) return -1;
            else if (a.suit > b.suit) return 1;
            else return 0;
        });
    }

    sortByRank() {
        //  this.droppedItems.sort((a, b) => b.rank - a.rank);

        this.otherCards.sort((a, b) => {
            if (a.rank < b.rank) return -1;
            else if (a.rank > b.rank) return 1;
            else return 0;
        });
    }

}




