import { $, component$, useSignal, useStylesScoped$, useOn } from '@builder.io/qwik'
import styles from './testimonial-section.css?inline' // Import CSS as a string
import { container } from '@recipe'

// Define an interface for the testimonial data
interface Testimonial {
  id: number
  quote: string
  authorName: string
  authorTitle: string
  authorImage: string // URL to the author's image
}

// Your testimonial data (consider moving this to a separate data file if it gets large)
const testimonialData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Excellent service and care. The staff is knowledgeable and always willing to answer questions. I wouldn't go anywhere else for my dental needs.",
    authorName: 'Thomas Linda',
    authorTitle: 'Designer',
    authorImage: 'https://i.pravatar.cc/50?img=1', // Example placeholder
  },
  {
    id: 2,
    quote: 'Another fantastic testimonial. The service was outstanding and the environment was very welcoming.',
    authorName: 'Jane Doe',
    authorTitle: 'Marketing Manager',
    authorImage: 'https://i.pravatar.cc/50?img=2', // Example placeholder
  },
  {
    id: 3,
    quote: 'Truly professional and caring. Made me feel comfortable throughout the entire process. Highly recommend!',
    authorName: 'Peter Jones',
    authorTitle: 'Developer',
    authorImage: 'https://i.pravatar.cc/50?img=3', // Example placeholder
  },
  // Add more testimonials here if needed
]

const TestimonialSection = component$(() => {
  useStylesScoped$(styles) // Apply the scoped styles

  const currentIndex = useSignal<number>(0) // Reactive state for the current slide index
  const note = useSignal<number>(2)

  if (note.value > 5) {
    throw new Error('etoile limit to 5')
  }

  const goToPrevious = $(() => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  })

  const goToNext = $(() => {
    if (currentIndex.value < testimonialData.length - 1) {
      currentIndex.value++
    }
  })
  useOn(
    'keydown',
    $(event => {
      switch (event.key) {
        case 'ArrowLeft':
          if (currentIndex.value > 0) {
            currentIndex.value--
          }
          break
        case 'ArrowRight':
          if (currentIndex.value < testimonialData.length - 1) {
            currentIndex.value++
          }
          break
      }
    }),
  )

  return (
    <section class='testimonial-section'>
      {/* Left Side - Image and Rating */}
      <div class='testimonial-left'>
        <div class='image-container'>
          <img
            src='https://picsum.photos/id/1/200/300' // Adjusted size
            alt='Dentist attending patient'
            width={400} // Add width/height for better performance
            height={300}
          />
          <div class='rating-overlay'>
            <div class='rating-score'>{note.value}/5</div>
            <div class='rating-details'>
              <p class='rating-description'>This rate is given by user after visiting our location</p>
              <div class='rating-stars'>
                {/* Create an array of 'totalStars' length and map over it */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {' '}
                    {/* Use index as key for simple list */}
                    {/* Check if current index is less than filledStars */}
                    {index < note.value ? '★' : '☆'}
                  </span>
                ))}
                <span class='rating-reason'>For Excellence Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content and Carousel */}
      <div class='testimonial-right'>
        <p class='testimonial-pre-title'>+ TESTIMONIAL</p>
        <h2 class='testimonial-title'>
          What our <span class='highlight'>Client Say</span>
        </h2>
        <p class='testimonial-subtitle'>We are committed to sustainability, eco-friendly initiatives.</p>

        <div class='carousel-container'>
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id} // Unique key for each item
              // Conditionally apply the 'active' class based on the current index
              class={{
                'carousel-slide': true,
                active: index === currentIndex.value,
              }}
            >
              <span class='quote-icon'>“</span>
              <blockquote class='quote-text'>{testimonial.quote}</blockquote>
              <div class='author-info'>
                <img
                  src={testimonial.authorImage}
                  alt={testimonial.authorName}
                  class='author-image'
                  width={50}
                  height={50}
                />
                <div class='author-details'>
                  <p class='author-name'>{testimonial.authorName}</p>
                  <p class='author-title'>{testimonial.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div class='carousel-nav'>
          <button
            type='button'
            class='nav-button prev'
            aria-label='Previous testimonial'
            onClick$={goToPrevious} // Use Qwik's event handler
            disabled={currentIndex.value === 0} // Disable button conditionally
          >
            ←
          </button>
          <button
            type='button'
            class='nav-button next'
            aria-label='Next testimonial'
            onClick$={goToNext} // Use Qwik's event handler
            disabled={currentIndex.value === testimonialData.length - 1} // Disable button conditionally
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
})

export default component$(() => {
  return (
    <>
      {/* Other page content */}
      <section
        class={container({
          size: 'medium',
          theme: 'darkBlueBanner',
          paddingBlock: 'md',
          marginBlock: 'md',
        })}
      >
        <TestimonialSection />
      </section>
      {/* Other page content */}
    </>
  )
})
