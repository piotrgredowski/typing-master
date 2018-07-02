<template>
  <div>
    <div class="input-container">
      <input class="input is-primary"
             v-model="typed"
             @keydown="startTimer()"
             @keyup="handleWriting()">
    </div>
    <div class="words-container">
      <div class="word">
        <template v-for="(letter, index) in words[0]">
          <span class="letter"
                v-bind:class="{correct: letterStatus(index) === 'correct',
                               incorrect: letterStatus(index) === 'incorrect',
                               idle: letterStatus(index) === 'idle'}"
                :key="letter+index">
            {{ letter }}
          </span>
        </template>&nbsp;
      </div>
      <div class="word" v-for="(word, index) in words.slice(1, 7)" :key="word+index">
        <template v-for="(letter, index) in word">
          <span class="letter"
                :key="letter+index">
            {{ letter }}
          </span>
        </template>&nbsp;
      </div>
    </div>
    <div class="statistics tile is-ancestor">
      <div class="time tile is-3 is-parent is-vertical">
        <div class="is-tile">Time</div>
        <div class="is-tile">{{ timer.time / 1000 }}s</div>
  </div>
      <div class="correct-words tile is-3 is-parent is-vertical">
        <div class="is-tile">Correct words</div>
        <div class="is-tile">{{ corrects }}</div>
      </div>
      <div class="mistaken-words tile is-3 is-parent is-vertical">
        <div class="is-tile">Mistakes</div>
        <div class="is-tile">{{ mistakes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export class Timer {
  // Delta of time increase in ms
  delta = 10;
  interval;
  time = 0;

  constuctor() {
  }

  start() {
    this.interval = setInterval(() => {
      this.time += this.delta;
    }, this.delta)
  }

  stop() {
    clearInterval(this.interval);
  }
}

export default {
  name: "Typer",
  data() {
    return {
      typed: '',
      words: [
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        'consectetur',
        'adipisicing',
        'elit',
      ],
      targetWord: '',
      writtenText: '',

      started: false,
      timer: new Timer(),

      corrects: 0,
      mistakes: 0,
    }
  },
  created: function() {
    this.targetWord = this.words[0] + ' ';
  },
  methods: {
    // TODO: Organise methods better
    wordAsArray: function(word) {
      return word.split();
    },

    handleWriting: function() {
      // Check if it is last word, last letter and if is correctly typed - then stop timer
      if (this.typedTrimmed() === this.words[this.words.length - 1]
          && this.letterStatus(this.typed, -1) !== 'incorrect') {
          this.timer.stop();
      }

      // Count mistakes
      if (this.targetWord !== '') {
        const length = this.typedTrimmed().length;
        if (this.targetWord.slice(0, length) !== this.typedTrimmed()) {
          this.mistakes += 1;
        };
      }

      // Check if typed word trimmed at start is equal to targetted word
      if (this.typedTrimmed() === this.targetWord) {
        // Enforce typing space after each word
        this.targetWord = this.words[1] + ' ';
        this.words.shift();
        // Reset typed after correct typed word
        this.$nextTick(() => {
          this.typed = '';
        })

        this.corrects += 1;
      }

    },

    letterStatus: function(index) {
      if (this.targetWord !== '') {
        if (this.typedTrimmed()[index] === this.targetWord[index]) return 'correct';
        if (this.typedTrimmed().length - 1 >= index
            && this.typedTrimmed()[index] !== this.targetWord[index]) return 'incorrect';
      }
      return 'idle';
    },

    startTimer: function() {
      if (!this.started) {
        this.started = true;
        this.timer.start();
    }
    },

    stopTimer: function() {
      this.timer.stop();
      this.started = false;
    },

    typedTrimmed: function() {
      // FIXME: Should not be done with regexp
      return this.typed.replace(/^\s+/, '');;
    },
  },
}
</script>

<style lang="scss">
.input-container, .words-container, .statistics {
  padding: 1em;
}

.input-container {
  width: 20em;
}

.words-container {
  .word {
    display: inline;

    .letter {
      display: inline-block;

      &.correct {
        color: green;
      }

      &.incorrect {
        color: red;
      }

      &.idle {
        color: black;
      }
    }
  }
}
</style>
