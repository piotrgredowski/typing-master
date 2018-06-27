<template>
  <div>
    <div class="input-container">
      <input class="input is-primary" v-model="typed" @keydown="handleWriting()">
    </div>
    <div class="words-container">
      <div class="word">
        <template v-for="(letter, index) in words[0]">
          <span class="letter"
                v-bind:class="{correct: letterStatus(words[0], index) === 'correct',
                               incorrect: letterStatus(words[0], index) === 'incorrect',
                               idle: letterStatus(words[0], index) === 'idle'}"
                :key="letter+index">
            {{ letter }}
          </span>
        </template>&nbsp
      </div>
      <div class="word" v-for="(word, index) in words.slice(1, 4)" :key="word+index">
        <template v-for="(letter, index) in word">
          <span class="letter"
                :key="letter+index">
            {{ letter }}
          </span>
        </template>&nbsp
      </div>
    </div>
  </div>
</template>

<script>
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
        'Dignissimos',
        'quibusdam',
        'reprehenderit',
        'ducimus',
        'nihil',
        'assumenda',
        'iste',
        'optio',
        'error',
        'cupiditate,',
        'ipsum',
        'tenetur',
        'voluptates',
        'excepturi',
        'tempore',
        'facilis',
        'repellat',
        'accusantium,',
        'magnam',
        'obcaecati',
        'animi',
        'Voluptas',
      ],
      targetWord: '',
      writtenText: '',
    }
  },
  created: function() {
    this.targetWord = this.words[0];
  },
  methods: {
    wordAsArray: function(word) {
      return word.split();
    },
    handleWriting: function() {
      if (this.typed === this.words[0]) {
        this.targetWord = this.words[1];
        this.words.shift();
        // FIXME: Not working for now.
        this.$nextTick(() => {
          this.typed = '';
        })
      }
    },
    letterStatus: function(word, index) {
      if (word !== '') {
        if (this.typed[index] === this.targetWord[index]) return 'correct';
        if (this.typed.length === index + 1 && this.typed[index] !== word[index]) return 'incorrect';
      }
      return 'idle';
    }
  }
}
</script>

<style lang="scss">
.input-container, .words-container {
  padding: 1em;
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
