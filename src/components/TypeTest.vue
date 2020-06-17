<template>
  <v-container class="secondary pa-2 pa-lg-5 elevation-10" fluid>
    <v-row>
    
      <!-- Top col for options -->
      <v-col cols="12">
        <v-sheet
          height="100%"
          width="100%"
          :class="textSize"
          class="pa-2 white--text"
          color="accent"
          elevation="5"
        >
          <v-row class="px-md-5 px-2" align="center" justify="space-between">
            <v-col cols="12" md="8" class="ma-0 pa-0 text-center text-md-left" style="display: flex; align-items:center">
              <span class="me-1">Word Selector </span>
              <v-btn-toggle 
                mandatory 
                v-model="noWords" 
                background-color="transparent"
                color="white"
                borderless
                dark
                tile
              >
                <v-btn text :class="buttonSize">10</v-btn>
                <v-btn text :class="buttonSize">25</v-btn>
                <v-btn text :class="buttonSize">50</v-btn>
                <v-btn text :class="buttonSize">100</v-btn>
                <v-btn text :class="buttonSize">250</v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4" class="ma-0 pa-0 text-md-right text-center">
              <span>WPM: {{ userPerfAverage[0] }} ACC: {{ userPerfAverage[1] }}%</span>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <!-- End of Top col for options -->

      <!-- Text box col -->
      <v-col cols="12">
        <v-sheet
          height="100%"
          width="100%"
          :class="textSize"
          class="pa-5 primary--text"
          color="contrast"
          elevation="5"
          v-html="textBoxText"
        ></v-sheet>
      </v-col>
    </v-row>
    <!-- End of text box col -->

    <!-- Input box row at start of game -->
    <div v-if="!isCompleted">
      <v-row 
        v-if="!isCompleted"
      >
        <v-col cols="8" md="10">
          <v-sheet
            height="100%"
            width="100%"
            :class="textSize"
            color="accent"
            elevation="5"
          >
            <input 
              type="text"
              v-model="inputText" 
              class="pa-4 white--text" 
              id="input-field" 
              placeholder="Type Here" 
              @keydown.space="addInput" 
              @input="startTimer" 
              @keyup.escape="restart"
              autofocus
            >
           </v-sheet>
        </v-col>
        <v-col cols="4" md="2">
          <v-btn 
            tile 
            height="100%" 
            width="100%" 
            :class="buttonSize"
            color="accent" 
            elevation="5"
            @click="restart"
          >
            Restart
          </v-btn>
        </v-col>
      </v-row>
      <!-- End of Input box row at start of game -->
    </div>

    <!-- Row with stats for end of game -->
    <div v-else>
      <v-row 
        justify="center"
        align="center"
      >
        <v-col cols="12">
          <v-sheet
            height="100%"
            width="100%"
            :class="textSize"
            class="pa-5 text-center white--text"
            color="accent"
            elevation="5"
          >
            <span>WPM: {{ getStats()[0] }} ACC: {{ getStats()[1] }}%</span>
          </v-sheet>
        </v-col>
        <v-col cols="12" align="center">
          <v-btn 
            tile 
            color="contrast" 
            class="primary--text"
            elevation="5"
            @click="restart"
            x-large
          >
            Restart
          </v-btn>
        </v-col>
      </v-row>
      <!-- End of row with stats for end of game -->
    </div>

  </v-container>
</template>

<script>
import wordList from '../assets/words/words.json'

export default {
  data: () => ({
    inputText: '', // User Input
    noWords: 0, // Word index to get from word list
    noWordsList: [10, 25, 50, 100, 250], // Range of available words
    testWordList: [], // Current array of selected words for user
    testWordListHTML: [], // Word list with html for colours and stuff
    userInputArray: [], // Array for storing user input
    isCompleted: false, // Whether current round is complete
    startTime: 0, // To be bound on first input
    endTime: 0, // To be bound on game complete
  }),
  methods: {
    gameComplete() {
      this.endTime = Date.now()
      this.isCompleted = true
    },
    startTimer() {
      // If user input is empty and start time is not set
      if (this.startTime === 0) {
        this.startTime = Date.now()
      }
    },
    restart() {
      window.location.reload() // Reload page
    },
    addInput() {
      // Check if accidental press of space or is round is complete
      if (this.inputText !== " " && !this.isCompleted) {
        // If it is not, add to userInputArray
        let temp = this.inputText.trim() // Cache current input in another var
        this.inputText = "" // Empty Text Input
        this.userInputArray.push(temp) // Push word into user array
        this.appendWordListHTML();
        if (this.testWordList.length === this.userInputArray.length) {
          this.gameComplete()
        }
      }
    },
    appendWordListHTML() {
      // Adds colours to words already typed. If correct, will be green, else it'll be red
      let currLength = this.testWordListHTML.length
      if (this.userInputArray[currLength].trim() === this.testWordList[currLength]) {
        this.testWordListHTML.push(`<span class="green--text darken-2">${this.testWordList[currLength]} </span>`)
      } else {
        this.testWordListHTML.push(`<span class="red--text darken-2">${this.testWordList[currLength]} </span>`)
      }
    },
    getTestWordList() {
      // Function for generating rand numbers
      const getRndInt = (max) => Math.floor(Math.random() * max)
      let randNumArray = []
      for (let i = 0; i < this.noWordsList[this.noWords]; i++) {
        // Fill up array to number of words required
        randNumArray.push(getRndInt(wordList.length))
      }
      // Initialise word list with rand number array
      this.testWordList = randNumArray.map(index => wordList[index])
    },
    getStats() {
      let wpm = 0
      let acc = 0
      let totalCorrectChars = this.testWordList.length // Accounts for spaces
      let totalChar = totalCorrectChars // Caches number of spaces
      let totalTime = (this.endTime - this.startTime) / 1000 / 60 // Total duration in minutes
      for (let i = 0; i < this.testWordList.length; i++) {
        totalChar += this.userInputArray[i].trim().length
        if (this.testWordList[i] === this.userInputArray[i].trim()) {
          totalCorrectChars += this.userInputArray[i].length
        }
      }
      // Save user perf into cookie
      this.savePerformance(totalCorrectChars, totalChar, totalTime)
      // 5 char per word
      wpm = Math.round(totalCorrectChars / 5 / totalTime * 100) / 100 
      acc = Math.round(totalCorrectChars / totalChar * 100)
      return [wpm, acc]
    },
    savePerformance(totalCorrectChars, totalChar, totalTime) {
      //Check if localStorage already stored previous attempts
      if (localStorage.getItem('totalCorrectChars')) {
        localStorage.setItem(
          'totalCorrectChars', 
          Number(localStorage.getItem('totalCorrectChars')) + totalCorrectChars
        )
        localStorage.setItem(
          'totalChar', 
          Number(localStorage.getItem('totalChar')) + totalChar 
        )
        localStorage.setItem(
          'totalTime', 
          Number(localStorage.getItem('totalTime')) + totalTime
        )
      } else {
        // Else, create them
        localStorage.setItem(
          'totalCorrectChars', 
          totalCorrectChars
        )
        localStorage.setItem(
          'totalChar', 
          totalChar 
        )
        localStorage.setItem(
          'totalTime', 
          totalTime
        )

      }
    },
  },
  computed: {
    // Computed properties for game functions and stats
    textBoxText() {
      // Styling for current word
      if (!this.isCompleted) {
        let currentWord = `<span style="font-weight: bold; text-decoration: underline;">${this.testWordList[this.testWordListHTML.length]}</span>`
        return this.testWordListHTML.join(' ') + currentWord + ' ' + this.testWordList.slice(this.testWordListHTML.length + 1).join(' ')
      }
      return this.testWordListHTML.join(' ')
    },
    userPerfAverage() {
      // Checks if past attempts have been stored in local storage
      if (localStorage.getItem('totalCorrectChars') != null && localStorage.getItem('totalCorrectChars') != 0) {
        let totalCorrectChars = localStorage.getItem('totalCorrectChars')
        let totalChar = localStorage.getItem('totalChar')
        let totalTime = localStorage.getItem('totalTime')
        let wpm = Math.round(totalCorrectChars / 5 / totalTime * 100) / 100 
        let acc = Math.round(totalCorrectChars / totalChar * 100)
        return [wpm, acc]
      }
      return ['TBC', 'TBC']
    },
    // Computed properties for dynamic sizing
    textSize() {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'headline' : 'subtitle-1' 
    },
    buttonSize() {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'subtitle-1' : 'subtitle-2' 
    }
  },
  created() {
    // Try to get user's settings and prev performances in cookies
    if (localStorage.getItem('noWords')) {
      this.noWords = localStorage.getItem('noWords')
    } else {
      // Initialise cookie on create if not present
      localStorage.setItem('noWords', this.noWords)
    }
    this.getTestWordList() // initialise test word list on create
  }, 
  watch: {
    noWords: function(val) {
      // Whenever user changes the word count, cache the count in cookie
      this.getTestWordList()
      localStorage.setItem('noWords', val)
      // If completed, refresh to get update
      if (this.isCompleted) {
        this.restart()
      } else {
        // Resetting the test so timer gets reset and html is empty
        this.testWordListHTML = []
        this.userInputArray = []
        this.startTime = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#input-field {
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  &:focus {
    border-style: solid;
    border-color: white;
    border-width: 1px;
  }
}
</style>