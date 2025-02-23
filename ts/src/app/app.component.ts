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
  const links = document.querySelectorAll('a');

  // Elementos relacionados ao Summary
  const summaryContent = document.querySelector('.summary-content') as HTMLParagraphElement;

  const pointsSummary = document.getElementById("points-summary") as HTMLElement;
  const textMoreSummary = document.getElementById("more-summary") as HTMLElement;
  const btnShowMore = document.querySelector(".btn-show-more") as HTMLButtonElement;

  // Elementos relacionados á área de comments
  const answeredTopic = document.querySelector(".answered-topic") as HTMLElement;
  const commentsContainer = document.querySelector(".comments-container") as HTMLElement;

  const pointsMessage = document.getElementById("points-message") as HTMLElement;
  const textMoreMessage = document.getElementById("more-message") as HTMLElement;

  // Elementos relacionados á create topic
  const containerCreateTopic = document.querySelector(".container-create-topic") as HTMLElement;
  const btnCreateTopic = document.querySelector(".btn-create-topic") as HTMLButtonElement;

  const btnCreateNewTopic = document.querySelector(".btn-create-new-topic") as HTMLButtonElement;


  // Elementos relacionados ao form
  const containerForm = document.querySelector(".container-form") as HTMLElement;
  const btnSend = document.querySelector(".container-button-send") as HTMLButtonElement;

  const containerFormSent = document.querySelector(".container-form-sent") as HTMLElement;
  const topicSent = document.querySelector(".topic-sent") as HTMLElement;

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

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
      textMoreMessage.style.display = 'inline';
      pointsMessage.style.display = 'none';

    } else {
      commentsContainer.style.display = 'none';
      textMoreMessage.style.display = 'none';
      pointsMessage.style.display = 'inline';
    }
  }

  function showForm(containerCreateTopic: HTMLElement, containerForm: HTMLElement) {
    if (containerForm.style.display === 'none' || containerForm.style.display === '') {
      containerForm.style.display = 'flex';
      containerCreateTopic.style.display = 'none';
    } else {
      containerCreateTopic.style.display = 'none';
      containerForm.style.display = 'flex';
    }
  }

  function sentForm(containerForm: HTMLElement, containerFormSent: HTMLElement, topicSent: HTMLElement, event: Event) {
    event.preventDefault();

    if (containerForm.style.display === 'none' || containerForm.style.display === '') {
      containerForm.style.display = 'flex';
      containerFormSent.style.display = 'none';
      topicSent.style.display = 'none'
    } else {
      containerForm.style.display = 'none';
      containerFormSent.style.display = 'flex';
      topicSent.style.display = 'flex';
    }
  }

  summaryContent?.addEventListener('click', () => readMore(textMoreSummary, btnShowMore, pointsSummary));
  answeredTopic?.addEventListener('click', () => showComments(textMoreMessage, commentsContainer, pointsMessage));
  btnCreateTopic?.addEventListener('click', () => showForm(btnCreateTopic.parentNode as HTMLElement, containerForm));
  btnCreateNewTopic?.addEventListener('click', () => showForm(btnCreateNewTopic.parentNode as HTMLElement, containerForm));
  btnSend?.addEventListener('click', (event) => sentForm(containerForm, containerFormSent, topicSent, event));
})

