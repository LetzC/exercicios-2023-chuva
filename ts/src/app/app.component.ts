import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
}

document.addEventListener('DOMContentLoaded', function () {
  const pointsSummary = document.getElementById("points-summary") as HTMLElement;
  const textMoreSummary = document.getElementById("more-summary") as HTMLElement;

  const pointsMessage = document.getElementById("points-message") as HTMLElement;
  const textMoreMessage = document.getElementById("more-message") as HTMLElement;

  const btnShowMore = document.querySelector(".btn-show-more") as HTMLButtonElement;
  const summaryContent = document.querySelector('.summary-content') as HTMLParagraphElement;
  const answeredTopic = document.querySelector(".answered-topic") as HTMLElement;
  const commentsContainer = document.querySelector(".comments-container") as HTMLElement;

  function readMore(trigger: HTMLElement, target1: HTMLElement, target2?: HTMLElement) {
    if (target1.style.display === 'none' || target1.style.display === '') {
      target1.style.display = 'inline';
      trigger.style.display = 'none';

      if (target2) {
        target2.style.display = 'inline';
      }
    } else {
      target1.style.display = 'none';
      trigger.style.display = 'inline';

      if (target2) {
        target2.style.display = 'none';
      }
    }
  }

  function showComments(textMoreMessage: HTMLElement, commentsContainer: HTMLElement, pointsMessage: HTMLElement) {
    if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
      commentsContainer.style.display = 'flex';
      textMoreMessage.style.display = 'flex';
      pointsMessage.style.display = 'none';

    } else {
      commentsContainer.style.display = 'none';
      textMoreMessage.style.display = 'none';
      pointsMessage.style.display = 'inline';
    }
  }

  summaryContent?.addEventListener('click', () => readMore(textMoreSummary, btnShowMore, pointsSummary));
  answeredTopic?.addEventListener('click', () => showComments(textMoreMessage, commentsContainer, pointsMessage));
})
